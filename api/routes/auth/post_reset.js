const { Router } = require('express')
const router = Router()

const {
  models: { User, ResetPassword },
} = require('../../models')
const sendMail = require('../../helpers/sendMail')

router.post('/reset', async function (req, res, next) {
  try {
    const { password, confirmPassword } = req.body
    if (password !== confirmPassword) {
      const err = new Error(
        "Passwords don't match! Kindly type the password carefully in the input fields to make" +
          ' sure they match.'
      )
      err.status = 400
      throw err
    }

    const { user: userID, token } = req.body
    const resetPassword = await ResetPassword.findOne({
      where: {
        UserId: userID,
        token,
      },
    })

    if (!resetPassword || resetPassword.token !== token) {
      const err = new Error(
        'No reset request found matching the provided credentials. Please try requesting ' +
          'for password reset again with your username/email information and notify the ' +
          'admins if the problem persists.'
      )
      err.status = 401
      throw err
    }

    await ResetPassword.destroy({
      where: {
        UserId: userID,
      },
    })

    const user = await User.findByPk(userID)
    user.set('password', password)
    await user.save()

    // Send email
    await sendMail(user.email, 'RESET_PASSWORD', { user })

    return res.json({
      message: `Account password has been reset successfully. You can now log-in using the new credentials.`,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router

const { Router } = require('express')
const router = Router()

const {
  models: { User, ResetPassword },
} = require('../../models')
const sendMail = require('../../helpers/sendMail')

router.post('/forgot', async function (req, res, next) {
  try {
    const { user: userID } = req.body
    const user = await User.findByPk(userID)

    const resetPassword = ResetPassword.build({
      UserId: user.id,
    })
    await resetPassword.generateToken()
    await resetPassword.save()

    // Send email
    await sendMail(user.email, 'FORGOT_PASSWORD', { user, resetPassword })

    return res.json({
      message: `A reset link has been sent to the email associated with the account, please follow the link to reset your password.`,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router

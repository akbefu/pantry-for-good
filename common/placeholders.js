const placeholderTypes = {
  PAGE: 'page',
  EMAIL: 'email',
  ATTACHMENT: 'attachment'
}

const placeholders = [
  {id: 'organization', label: 'Foodbank Name'},
  {id: 'address', label: 'Foodbank Address'},
  {id: 'url', label: 'Foodbank Website'},
  {id: 'clientIntakeNumber', label: 'Client Intake Number'},
  {id: 'supportNumber', label: 'Support Number'},

  {id: 'firstName', label: 'User First Name', type: placeholderTypes.EMAIL},
  {id: 'lastName', label: 'User Last Name', type: placeholderTypes.EMAIL},
  {id: 'fullName', label: 'User Full Name', type: placeholderTypes.EMAIL},
  {
    id: 'passwordResetLink',
    label: 'Password Reset Link',
    type: placeholderTypes.EMAIL,
    required: true,
    format: value => `<a href="${value}">Reset Password</a>`
  },
  {
    id: 'logo',
    label: 'Logo',
    type: placeholderTypes.ATTACHMENT,
    format: () => '<img src="cid:logo" alt="Logo" />'
  },
  {
    id: 'signature',
    label: 'Signature',
    type: placeholderTypes.ATTACHMENT,
    format: () => '<img src="cid:signature" alt="Signature" />'
  }
]

function getPagePlaceholders() {
  return placeholders.filter(pl => !pl.type || pl.type === placeholderTypes.PAGE)
}

function getEmailPlaceholders() {
  return placeholders.filter(pl => pl.type === placeholderTypes.EMAIL)
}

function getAttachmentPlaceholders() {
  return placeholders.filter(pl => pl.type === placeholderTypes.ATTACHMENT)
}

function getPlaceholders(types) {
  let placeholders = getPagePlaceholders()

  if (types.find(type => type === placeholderTypes.EMAIL))
    placeholders = placeholders.concat(getEmailPlaceholders())

  if (types.find(type => type === placeholderTypes.ATTACHMENT))
    placeholders = placeholders.concat(getAttachmentPlaceholders())

  return placeholders
}

export {
  placeholders as default,
  placeholderTypes,
  getPlaceholders
}

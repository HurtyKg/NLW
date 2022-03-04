const LinksSocialMedia = {
  github: 'HurtyKg',
  youtube: 'channel/UCr9lbdrbPgaA72emytyUz3Q',
  facebook: 'enzo.oliveira.7543',
  instagram: 'enzo_vdg/',
  twitter: 'EnzoOli17123010'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.userName
      userBio.textContent = data.bio
      userLink.textContent.href = data.html_url
      UserImage.scr = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

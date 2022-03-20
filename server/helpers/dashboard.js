const getAge = (birthday) => {
  const today = new Date()
  const born = new Date(birthday)
  let age = today.getFullYear() - born.getFullYear()
  let monthsDiferences = today.getMonth() - born.getMonth()

  if (monthsDiferences < 0 || (monthsDiferences === 0 && today.getDate() < born.getDate())) {
    age--;
  }

  return age;
}

module.exports = {
  getAge
}

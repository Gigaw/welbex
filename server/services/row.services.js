const filtersConfig = {
  name: ['includes'],
  count: ['more', 'less', 'equal'],
  distance: ['more', 'less', 'equal'],
}

const configureFilterQuery = (name, type, value) => {
  if (!checkFiltersValidity(name, type)) {
    return ''
  }
  let result = `WHERE ${name}`
  switch (type) {
    case 'includes': result = result + ` LIKE '%${value}%'`
      break;
    case 'more': result = result + ` > ${value}`
      break;
    case 'less': result = result + ` < ${value}`
      break;
    case 'equal': result = result + ` = ${value}`
      break;
  }
  return result
}

const checkFiltersValidity = (name, type, value) => {
  //Нет фильтра
  if (!name) {
    return false
  }
  //нет такого поля
  if (!Object.keys(filtersConfig).includes(name)) {
    return false
  }
  //нет такой опции для поля
  if (!filtersConfig[name].includes(type)) {
    return false
  }

  return true
}

module.exports = {configureFilterQuery, checkFiltersValidity}
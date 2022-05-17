const shortentitle = (title) => {
  const splitedTitle = title.split(' ')
  const newtitle = `${splitedTitle[0]} ${splitedTitle[1]} ...`
  return newtitle
}

const isAdded = (item , id) => {
  const resulte = !!item.selectedItems.find(item => item.id === id)
  return resulte
}

const quantityConter = (item , id) => {
  const index = item.selectedItems.findIndex(item => item.id === id);
  if (index !== -1) {
    return item.selectedItems[index].quantity
  } else {
    // return false
  }
}

export { shortentitle , isAdded , quantityConter }
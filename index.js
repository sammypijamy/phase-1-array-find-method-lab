function superbowlWin(records) {
 const found = records.find(function (record){
    return record.result === "W"
  })
  return found ? found.year : undefined 
}


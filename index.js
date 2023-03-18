function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }

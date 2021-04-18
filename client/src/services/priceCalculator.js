const fn = (noOfRooms) => {
  if (noOfRooms == "Rooms...") {
    return "...";
  } else if (noOfRooms >= 4 && noOfRooms <= 5) {
    return (noOfRooms * 7.5).toFixed(2);
  } else if (noOfRooms >= 6 && noOfRooms <= 7) {
    return (noOfRooms * 7).toFixed(2);
  } else if (noOfRooms >= 8 && noOfRooms <= 9) {
    return (noOfRooms * 6.5).toFixed(2);
  } else if (noOfRooms >= 10) {
    return (noOfRooms * 6).toFixed(2);
  } else {
    return "...";
  }
};

export default fn;

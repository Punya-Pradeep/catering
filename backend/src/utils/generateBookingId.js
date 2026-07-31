const generateBookingId = () => {
  const random = Math.floor(100000 + Math.random() * 900000);

  return `BK-${Date.now()}-${random}`;
};

module.exports = generateBookingId;
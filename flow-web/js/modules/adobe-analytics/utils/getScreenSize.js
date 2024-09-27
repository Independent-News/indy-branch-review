// Define the getScreenSize() function
const getScreenSize = (dimensions = true) => {
  const screenSize = {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
  return dimensions ? `${screenSize.width}x${screenSize.height}` : screenSize;
};

export default getScreenSize;

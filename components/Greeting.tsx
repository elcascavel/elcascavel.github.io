interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = () => {
  const currentHour = new Date().getHours();

  console.log(currentHour);
  let timeOfDay;

  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  let greeting;

  if (timeOfDay === "morning") {
    greeting = "Good morning";
  } else if (timeOfDay === "afternoon") {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return greeting;
};

export default Greeting;

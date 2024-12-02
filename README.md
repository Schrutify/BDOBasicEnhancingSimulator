This application simply tries to simulate the high number and wide range of probabilities in Black Desert Online.

Between Minimum and Maximum values, the number of attempts is determined according to the success rate.

The application lists the results of the trials. The total number of successful and unsuccessful trials is shown.

For trials over 10K, only successful trials are logged.

Basically, it works like this:
```
const randomNumber = (Math.random() * (maxValue - minValue)) + minValue;
const result = randomNumber <= successRate ? 'Success' : 'Failure';
```
In case minValue=0 and maxValue=1:
```
Math.random() might return 0.4321.

(Math.random() * (maxValue - minValue)) = 0.4321 * 1 = 0.4321.

Therefore, randomNumber = 0.4321 + 0 = 0.4321.
```

In this case, the randomNumber variable will have a value between 0 and 1.

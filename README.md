## Welcome to Srijan Test

### Exercise 1

There is an odometer in a bike and it is broken in a way whenever there supposed to be value 4 in one of the 5 digits in odometer it skips that and shows 5. It is not able to display the digit 4. For example, if the odometer is at reading 32363 KM then next reading it will show is 32365 and not 32364 or if the odometer shows 39999 then next reading it will show is 5000 instead 4000. 
So if odometer shows the current reading `56287` then what is its actual reading?

### Exercise 2

We have a file which has `10 million` numbers put in randomly ranging from `0 to 99`.
Sort the array and write it to another file without keeping the whole array into memory or reading the whole file at once and putting it in memory.

### Exercise 3

There is an attached log file from one of the development web server. 
Line number 2 of this log file is something like this "Processing by SprintsController#show as JSONAPI"
This tells us, sprints controller's show action(method or function) ran. You have to parse this log file and output how many times the controller's action ran.

`expected output:`
```javascript
SprintsController => show action ran 23 times
SprintsController => index action ran 17 times
and so on..
```

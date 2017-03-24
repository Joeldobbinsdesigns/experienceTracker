# Experience Tracker 

Track months and years of a certain event, like LinkedIn, anywhere in your own site

## Getting Started

Download the experienceTracker.es5.min.js and copy to the js folder within your site

### Installing

Link the experienceTracker.es5.min.js JavaScript file towards the end of your body tag but before your main JavaScript custom scripts
```
<body>
...

<script src="js/experienceTracker.es5.min.js"></script>
<script src="js/main.es5.min.js"></script>
</body>
```

Create an instance, or several instances. To set the month, add or subtract the currentMonth. Number ranges from 0 to 11. E.g. March is 3 months away from June so you would subtract 3. Similarly, to set the year, add or subtract the year, so if the start date was in 2010 then subtract by 2010 from currentYear

```
//Instance 1
var totalExperienceMonths = currentMonth + 4;
var totalExperienceYears = currentYear - 2010;
getExperience(totalExperienceMonths, totalExperienceYears, 'totalExperience');

//Instance 2
var thinkZionExperienceMonths = currentMonth + 6;
var thinkZionExperienceYears = currentYear - 2017;
getExperience(thinkZionExperienceMonths, thinkZionExperienceYears, 'thinkZionExperience');

//Instance 3
var contractorExperienceMonths = currentMonth - 2;
var contractorExperienceYears = currentYear - 2008;
getExperience(contractorExperienceMonths, contractorExperienceYears, 'contractorExperience');
```

Now you can simply add an id with the same name as the 3rd parameter i.e. 'totalExperience' to the element you wish to output the experience generated text to your website

```
//Instance 1
<p id="totalExperience"></p>

//Instance 2
<div id="thinkZionExperience"></div>

//Instance 3
<span id="contractorExperience"></span>
```

This would replace the contents of the element with something like:

```
//Instance 1
7 years and 6 months

//Instance 2
8 months

//Instance 3
9 years
```

## Authors

* **Joel Dobbins** - *Initial work* - [Joeldobbinsdesigns](https://github.com/Joeldobbinsdesigns)

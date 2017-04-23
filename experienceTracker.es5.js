//calculate years and months working professional industry experience
"use strict";

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var experience;

function getExperience(monthsExperience, yearsExperience, totalExperience) {
    //reset experience
    experience = '';

    //roll over month if more than a year worth
    if (monthsExperience > 11) {
        monthsExperience = monthsExperience - 12;
        yearsExperience++;
    }

    if (yearsExperience > 0) {
        experience = yearsExperience;
    }

    //check if there are multiple years
    if (yearsExperience > 1) {
        experience += " years";
    } else if (yearsExperience === 1) {
        experience += " year";
    } else {}
    //do nothing

    //check if there are any months to add
    if (monthsExperience !== 0) {

        if (yearsExperience > 0) {
            experience += " and ";
        }

        experience += monthsExperience;

        //decide whether to write month or months
        if (monthsExperience > 1) {
            experience += " months";
        } else {
            experience += " month";
        }
    }

    //if no months or years
    if (monthsExperience === 0 && yearsExperience === 0) {
        experience = "< 1 month";
    }

    $('#' + totalExperience).text(experience);
}


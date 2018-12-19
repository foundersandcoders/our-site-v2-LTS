// To open/close applications:
//    * set the variable to true for open, or false for closed
//    * set the application form link to the correct link when opening
//    * Check your local version looks right. That's it!

const APPLICATIONS_OPEN = true
const APPLICATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvlLQyjC6g_7SY6vbNKVrdZglnW-a5yyw_zHWM-IyDju_F4w/viewform"

// To update any of the external forms on the site, change these variables
const EXPRESSION_OF_INTEREST_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSepdNxKsrMjhfnbdkzKUgNpeWFmp8WLyiqTe_UY10TsPpFOEQ/viewform"
const HIRE_CONTACT_FORM = "https://airtable.com/shrLFs9AORwMO93cb"
const TECH_FOR_BETTER_APPLICATION_FORM =
  "https://airtable.com/shrMtNWdsGQQs65mO"

// To change the upcoming cohort dates, change this array
// The cohorts should be listed **earliest to latest** - this is the order they will appear on the page.
// We suggest you add a new object to the end of the array following the pattern and then remove the first item.
const COHORT_DATES = [
  {
    cohort: "Spring 2019",
    expression_of_interest: "Until 30th November",
    application_window: "1st December - 31st December",
    interview_dates: "7th January - 12th January",
    course_dates: "4th March, 2019 - June 21st, 2019",
  },
  {
    cohort: "Summer 2019",
    expression_of_interest: "January - March",
    application_window: "1st April - 30th April",
    interview_dates: "7th May - 11th May",
    course_dates: "1st July 2019 - 18th October, 2019",
  },
  {
    cohort: "Winter 2019",
    expression_of_interest: "May - July",
    application_window: "1st August - 31st August",
    interview_dates: "9th September - 14th September",
    course_dates: "28th October 2019 - 21st February 2020",
  },
]

export {
  APPLICATIONS_OPEN,
  APPLICATION_FORM,
  EXPRESSION_OF_INTEREST_FORM,
  HIRE_CONTACT_FORM,
  TECH_FOR_BETTER_APPLICATION_FORM,
  COHORT_DATES,
}

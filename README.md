# Founders and Coders Website

💛💙❤️💚 Welcome to the home of the Founders and Coders website! 💛💙❤️💚

For brand assets visit [`hq`](https://github.com/foundersandcoders/hq).

### About

This rebrand and website redesign was directed by @rebeccaradding and lovingly created by [InFact Coop](www.infactcoop.com), an agency composed of Founders and Coders graduates. A rich fabric of influences and inspirations guided us through this creative process, from contemporary web design to modern art movement, including (but not limited to):

- [De Stijl](https://en.wikipedia.org/wiki/De_Stijl)
- [Bahaus](https://en.wikipedia.org/wiki/Bauhaus)
- [Adobe Hidden Treasures: Bahaus Dessau](https://vimeo.com/274204075)
- [Bahaus Approached Minimalism](https://dribbble.com/shots/3960551-Bauhaus-approached-minimalism)
- [The website of Atelier Gymnase](https://www.ateliergymnase.com/), designed by [Jomor Design](https://www.jomordesign.com/)
- [The Culture page](http://culture.basicagency.com/) of the Basic Agency website

We hope you love the fun, contemporary style and enjoy using the new site!

### Contents

- [Maintenance notes](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator)
- [Contributing to the site](#Contributing)
- [Suggestions for contributions](#Suggestions-for-additional-work)
- [Running locally](#Instructions-for-running-locally)
- [foundersandcoders.com hosting information](#Hosting-info)

## Responsbility for routine maintenance

- @yvonne-liu will be updating the Apply page
- The current course facilitator will coordinate all other maintenance: reviewing issues, assigning work, reviewing PRs, and so on

## Maintenance tasks for the FAC team and course facilitator

To make routine maintenance simple, we've put most of the information that changes regularly all in one place - `maintenance.js` in the root of the project.

By editing this file you can:

- Toggle applications open/closed
- Update the table of cohort dates
- Update any of the various form URLs. These are:
  _ Application form
  _ Expression of interest form
  _ Contact Joe (Hire page)
  _ Tech for Better application form

FAC staff and the Course Facilitator are encouraged to create PRs and merge changes to this file without following the full contributing process. The same applies for the changes below.

**Updating the Prerequistites:**

The pre-requisites can be found in `src/components/StudentApplicationSteps.js`. You will have to edit the components freehand, and if the amount of text changes dramatically, you may need to tweak margins so the text looks well spaced on mobile, tablet and desktop. Use `<_ExternalLinks href="...">` for (shock) external links and the specially styled `<_ListItem >` within a `ul` for bulleted lists.

**Adding Stories:**

To add an article to Stories page, you have to edit `src/storyData.js` and add an object to the array of articles, using the following as a template:

```
{
  storyType: "",         // SELECT ONE OF: "by_us", "about_us", "in_the_press", "podcast"
  img: importedVariable, // optional *
  heading: "",
  subtitle: "",
  author: "",            // optional
  publication: "",       // optional - only for "in_the_press" stories
  date: "",              // format `MMM DD YYYY` e.g "Sep 08 2018"
  url: ""
}
```

- to add an image with an article, you will have to add the image to `src/assets/photos` and import it at the top of the `storyData` file. See examples in the file for guidance.

**Adding Student FAQs:**

To add an FAQ to the 'What is Founders and Coders?' page, you will need to add a new functional component to the file in `src/components/StudentFAQs.js`. **You must also ensure it is exported in the array at the bottom of the page**. The order in the array is the order FAQs appear on the page.

Use this template for your new functional component:

```
const UniqueName = ({ color }) => {
  return (
    <Question
      question="Your new question Text?"
      colour={color}
    >
      <p>
        Your fabulous answer.
      </p>
    </Question>
  )
}
```

## Contributing

We **welcome** additions and enhancements from the Founders and Coders community!

The **current course facilitator** will coordinate additions and enhancements to the site. This guidance is for those wishing to support the current course facilitator by adding bug fixes, features or enhancements to the site.

For routine maintenance (e.g. opening applications) see the [maintenance section](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator).

### Before starting work

1. Search this repo's [issues](https://github.com/foundersandcoders/fac-new-website/issues) to see if an issue exists for the problem you are solving.
2. If the issue does not exist, create it. Include a descriptive body.
3. If your new issue relates to any others, reference those issues in the body. This enables others to follow the history of the topic.
4. Indicate on the issue that you would like to take it on. Assign the **current course facilitator**, so that they know what you're working on.
5. Assign [the appropriate label](#labels).
6. Once you are sure of what you need to do and that it is needed, assign yourself to the issue.
7. Clone, and create a new branch for your work

#### Labels

`bug` - something in this repo is broken (e.g. a link)  
`discuss` - you'd like the community's input before you start any work  
`question` - you're not actually sure whether this is an issue or not and would like confirmation  
`help wanted` - you would like some help in completing work on this issue

### Starting work

#### Commits

The commit history of each file should tell a story:

- [Describe your changes well](https://gist.github.com/mikepea/863f63d6e37281e329f8#describe-your-changes-well-in-each-commit)
- [Commits should be granular](https://gist.github.com/mikepea/863f63d6e37281e329f8#keep-it-small)
- **Be sure to reference an issue in each commit** - use multiline messages

#### Pull Requests

Once you have finished your work, push up your branch and make a pull request. Remember, a pull request should be as small as possible. This makes the review process quick and easy.

Make sure your PR has the following:

1. [A descriptive title](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary) - distinct from others and therefore searchable
2. [A body with details of everything in the pull](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary)
3. Reference to any/all related issues in description
4. Reviewers
   - the current course facilitator, who will review all PRs
   - anyone else who collaborated with you on this issue

## Suggestions for additional work

For routine maintenance see our section on [Maintenance](#Maintenance-tasks-for-the-FAC-team-and-Course-Facilitator) and please read our section on [Contributing](#Contributing) before starting to work on the site.

**Some enhancements we'd LOVE to see:**

- We'd like to regularly update the Stories section of our site with recent news articles. However, adding articles currently requires hard-coding a item into the articles array and making a PR to this repo! It would be great to have a protected 'admin area' that holds a simple form which submits new articles to the site.

## Instructions for running locally

1. Clone this repo and navigate to it:

```
git clone https://github.com/foundersandcoders/fac-new-website.git

cd fac-new-website
```

2. Install the dependencies:

```
npm install
```

3. Run the development server:

```
npm run develop
```

## Hosting info

This new site is hosted on [Netlify](https://netlify.com) and the DNS records were bought on [Namecheap](https://namecheap.com) but are being managed on Netlify.

If you want to:

### Add a subdomain

eg. techforbetter.foundersandcoders.com

1. go to the app on Netlify and click 'Domain settings'
2. click 'Domain management' in the sidebar
3. click on the three dots after 'Primary Domain' and then 'Go To DNS panel'
4. click 'Add new record' and insert a CNAME record with the name '_whatever-your-subdomain-is_' and value 'https://peaceful-jennings-557e44.netlify.com.'
5. click 'Add new record' again and insert the same record, this time with the name 'www._whatever-your-subdomain-is_'
6. Go back to 'Domain management' and add two domain aliases, one with '_whatever-your-subdomain-is_.foundersandcoders.com' and one with 'www._whatever-your-subdomain-is_.foundersandcoders.com'

### Add a redirect

eg. techforbetter.foundersandcoders.com redirects to foundersandcoders.com/techforbetter

1. Clone the repo and make a branch for your changes
2. Go to the file '\_redirects' in the static folder
3. Follow the pattern you can see there for the techforbetter redirect; you should end up with 4 lines (this covers the cases of https://www, https://, http://www and http://)
4. Add, commit and make a pull request with your changes.

# Thank you for reading!

P.S. Please star this repo 🌟

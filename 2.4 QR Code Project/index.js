
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image'
inquirer.prompt([
    {
    message: "type the url",
     name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.URL);
    
 
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("newqr_twitter.png"));
    fs.writeFile("URLNEW.txt", answers.URL, (err) => {
        if (err) throw err;
            console.log("The file has been saved!");
        });
console.log(svg_string)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


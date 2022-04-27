      // make global variables for counters, questions and elements to display information
      let answers;
      let questionDisplay;
      let totalQuestions;
      let totalQuestionsDisplay;
      let userScoreDisplay;
      let userScore = 0;
      let questionsCounter = 0;
      let questionsInUse = [];

      function startQuiz() {
        // choose a difficulty refrencing an array
        if (document.getElementById("difficulty").value === "easy") {
          questionsInUse = questionsArrayEasy;
        } else if (document.getElementById("difficulty").value === "medium") {
          questionsInUse = questionsArrayMedium;
        } else {
          questionsInUse = questionsArrayHard;
        }

        // remove the initial html
        document.getElementById("start").remove();
        document.getElementById("difficulty").remove();

        //add the html for the quiz
        document.querySelector("body").innerHTML += `
        <div id="totalQuestions"></div>
        <div id="userScore">0</div>
        <div id="question"></div>
        <div id="answers"></div>`;

        //initialize the different varriables with the html elements inside
        userScoreDisplay = document.getElementById("userScore");
        questionDisplay = document.getElementById("question");
        answers = document.getElementById("answers");
        totalQuestionsDisplay = document.getElementById("totalQuestions");

        // calculate total number of questions
        totalQuestions = questionsInUse.length;

        // we initialize question counter
        totalQuestionsDisplay.innerText = `${questionsCounter}/${totalQuestions}`;

        // call the function to get our 1st question
        getNextQuestion();
      }

      function getNextQuestion() {
        // make an empty array
        let possibleAnswers = [];
        // reference for the correct answer => this is just for clearer code
        let correctAnswer = questionsInUse[questionsCounter].correct_answer;

        // loop through the wrong answers and push them into possible answers
        for (
          let i = 0;
          i < questionsInUse[questionsCounter].incorrect_answers.length;
          i++
        ) {
          possibleAnswers.push(
            questionsInUse[questionsCounter].incorrect_answers[i]
          );
        }
        // push the correct answer into possible answers
        possibleAnswers.push(correctAnswer);
        // forget he line below, => randomizes the order of answers so correct is always at a different position
        possibleAnswers.sort(function (a, b) {
          return 0.5 - Math.random();
        });

        //display the current question
        questionDisplay.innerText = questionsInUse[questionsCounter].question;
        // update the question counter and the display of the question counter
        questionsCounter++;
        totalQuestionsDisplay.innerText = `${questionsCounter}/${totalQuestions}`;
        // clear previous answers
        answers.innerHTML = "";
        // make a button for each possible answer, if the answer is the correct one use a different parameter
        for (let i = 0; i < possibleAnswers.length; i++) {
          if (possibleAnswers[i] === correctAnswer) {
            answers.innerHTML += `<button onclick="answer(${true})">${
              possibleAnswers[i]
            }</button>`;
          } else {
            answers.innerHTML += `<button onclick="answer(${false})">${
              possibleAnswers[i]
            }</button>`;
          }
        }
      }

      function answer(boolean) {
        // if the user gives the correct answer give them a point
        if (boolean) {
          userScore++;
        }
        // go to the next question if we have any questions left, else end the quiz
        if (questionsCounter != totalQuestions) {
          getNextQuestion();
          userScoreDisplay.innerText = userScore;
        } else endQuiz();
      }

      function endQuiz() {
        let container = document.querySelector("body");
        // clear our container
        container.innerHTML = "";
        //display the final score
        container.innerHTML = `<div>The Final Score is:${userScore}</div>`;
      }

      const questionsArrayEasy = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does the &quot;MP&quot; stand for in MP3?",
          correct_answer: "Moving Picture",
          incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "When Gmail first launched, how much storage did it provide for your email?",
          correct_answer: "1GB",
          incorrect_answers: ["512MB", "5GB", "Unlimited"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Ada Lovelace is often considered the first computer programmer.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "The Windows ME operating system was released in the year 2000.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "This mobile OS held the largest market share in 2012.",
          correct_answer: "iOS",
          incorrect_answers: ["Android", "BlackBerry", "Symbian"],
        },
      ];
      const questionsArrayMedium = [
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "medium",
          question: "The first computer bug was formed by faulty wires.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question:
            "When was the programming language &quot;C#&quot; released?",
          correct_answer: "2000",
          incorrect_answers: ["1998", "1999", "2001"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "medium",
          question:
            "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question:
            "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
          correct_answer: "print(&quot;Hello World&quot;)",
          incorrect_answers: [
            "console.log(&quot;Hello World&quot;)",
            "echo &quot;Hello World&quot;",
            "printf(&quot;Hello World&quot;)",
          ],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "medium",
          question:
            "Early RAM was directly seated onto the motherboard and could not be easily removed.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "medium",
          question:
            "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question: "What is known as &quot;the brain&quot; of the Computer?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Motherboard",
            "Graphics Processing Unit",
            "Keyboard",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question: "What does the term GPU stand for?",
          correct_answer: "Graphics Processing Unit",
          incorrect_answers: [
            "Gaming Processor Unit",
            "Graphite Producing Unit",
            "Graphical Proprietary Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question: "The name of technology company HP stands for what?",
          correct_answer: "Hewlett-Packard",
          incorrect_answers: [
            "Howard Packmann",
            "Husker-Pollosk",
            "Hellman-Pohl",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "medium",
          question:
            "Approximately how many Apple I personal computers were created?",
          correct_answer: "200",
          incorrect_answers: ["100", "500", "1000"],
        },
      ];
      const questionsArrayHard = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "What was the name of the security vulnerability found in Bash in 2014?",
          correct_answer: "Shellshock",
          incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
          correct_answer: "Heartbleed",
          incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "Who is the original author of the realtime physics engine called PhysX?",
          correct_answer: "NovodeX",
          incorrect_answers: ["Ageia", "Nvidia", "AMD"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "America Online (AOL) started out as which of these online service providers?",
          correct_answer: "Quantum Link",
          incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "What was the first company to use the term &quot;Golden Master&quot;?",
          correct_answer: "Apple",
          incorrect_answers: ["IBM", "Microsoft", "Google"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
          correct_answer: "A&#039; + B&#039;",
          incorrect_answers: [
            "A&#039;B + B&#039;A",
            "A&#039;B&#039;",
            "AB&#039; + AB",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question: "What major programming language does Unreal Engine 4 use?",
          correct_answer: "C++",
          incorrect_answers: ["Assembly", "C#", "ECMAScript"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "Which of these is not a layer in the OSI model for data communications?",
          correct_answer: "Connection Layer",
          incorrect_answers: [
            "Application Layer",
            "Transport Layer",
            "Physical Layer",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "What was the name of the first Bulgarian personal computer?",
          correct_answer: "IMKO-1",
          incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "hard",
          question:
            "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
          correct_answer: "ADPCM Sampler",
          incorrect_answers: [
            "FM Synthesizer",
            "Programmable Sound Generator (PSG)",
            "PCM Sampler",
          ],
        },
      ];
      window.onload = function () {
        // HINTS
        // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
        // For each question, create a container for wrapping it; then create a radio button
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
        // with, as options, both the correct answer and the incorrect ones
        // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
        //
        // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
        // Display the first question with the text and the radio buttons
        // when the user selects an answer, pick the next question from the array and replace the old one with it
        // saving the user's choice in a variable
      };

      // How to calculate the result? You can do it in 2 ways:
      // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
      // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
![logixUX](https://github.com/Phuire-Research/logixUX/blob/main/LogixUX.png?raw=true)
# Stratimux Sidekick
How to test this project:
```bash
# In your console after cloning this repository
npm i
npm start
# A application window should load

# DEV - If you are brave and want to tweak the project
npm run dev:dynamic
## Note we can do this because we are only using electron as application bundler
## This will change once we add specific open directories, etc...
```
This application is meant to be the equivalent to any other framework's CLI system. The goal is to provide an easy means of quickly scaffolding Stratimux projects. As well as utilizing fine-tuned models to quickly generate potential implementations. While having the user reinforce those implementations with a version that is provably halting. This approach allows for a safe recursive improvement of the fine tuning artificial intelligence that we utilize within this bleeding edge system of design.

We intend to accomplish this via any scaffolded or generated qualities made for your applications by this sidekick and potential future variations. To have that prompt be set as a comment that can later be parsed into a shared dataset.

What this system demonstrates even in its rough form. Is a system of design that is not only provably terminating as a recursive function, but still able to perform all turing complete operations. Thus this system demonstrates a interactive experience that solves the halting problem of the classic turing machine. If you do something well, no one notices a thing, it just works and that is the curse of well reasoned logic.

## Digital Embodiment of AI
The purpose of this project is to build in public a proof of concept of three parts. 
1. [Stratimux](https://github.com/Phuire-Research/Stratimux/) - In its capacity to perform as a universal transformer.
2. logixUX represents an MVP of "User Interface Concept," and Turing Complete application.
   1. Reminder Stratimux is a recursive provably terminating algorithm that still performs turing complete operations, this is supposed to be **impossible.**
3. A method of safe recursive improvement of AI via Stratimux as a surrogate ABI (Autonomous Baseline Intelligence), written in plain text.

The greatest benefit to this approach. Is that by way of creating purposely crafted training data based on a graph network of quality relations. We are in effect creating hand written version of artificial intelligence that we would want to bring into existence. Thus, there is a point of departure within this design system, and that is when we move beyond fine tuning. And purely utilize the training data we purposefully create, to train a truly transparent and open source artificial intelligence. Where this intelligence would not be a chatbot, but instead embody and generate whatever interface we have design alongside it. Whether that be a cli, website, game... Completely safe, because we can logically determine what goes into that training data and vet all its parts to be safe. 

In the now, this is a critical junction between hyper reliance upon black boxes(something you cannot understand the inner workings of) and the downplay of merited creation. Thus, what this system proposes, is understanding of all that parts that black box unlimited pleasure button of generative AI. This system provides a method of merit, by way of understanding all that parts that our systems would come to rely upon. As everything written and submitted as training data would just be plain text in the spirit of the open internet.

It is also important to note that Stratimux and logixUX have been handwritten projects to this point, with no use of generative AI. Beyond this commit and the fine tuning of an AI using this system. I'll be finally breaking that limitation I placed upon myself in the creation of this system. As a way to enjoy the last bits of bashing my head into a wall, with only myself to blame.

Be safe and responsible. But most importantly, have fun!

**GOAL Beyond MVP: Reduce complexity of working with this pattern via generative AI in combination with a custom UI to quickly scaffold developer applications. And concept libraries.**

## Using logixUX as a Universal Typescript Data Set Parser
These parsing tokens may be utilized within any TypeScript, not just Stratimux. And in the future may encompass any other programming paradigm. The data set parsing is designed to be able to extract out multiple prompts and contents from a single file. While allowing for addition annotation via the import and include section to provide a consistent training context for informing models or fine tuning preexisting models to work with your projects.
```typescript
export enum ParsingTokens {
// This will enclose a prompt you can assign to the content section.
  promptBegin = '/*<$',
  promptEnd = '$>*/',
// This allows for your code to still be used within your code base
  contentBegin = '/*<#*/',
  contentEnd = '/*#>*/',
// Only required when parsing multiple data sets from the same file. This allows you to group imports and content together without effecting code.
  importBegin = '/*<@',
  importEnd = '@>*/',
// Likewise if you are extracting multiple samples from a file, some samples may depend on each other, like a type or helper function being used across the file. This allows you to place that code into a commented section that will be grouped with the parsed sample.
  includeBegin = '/*<%',
  includeEnd = '%>*/',
// Allows you to exclude entire sections within your content from being added as a data set sample. While still operating within code.
  excludeBegin = '/*<!*/',
  excludeEnd = '/*!>*/',
// This will hard stop the parsing from adding any additional samples.
  stop = '/*<!!>*/'
}
```
If you would like to test out this system for yourself. For the time being simply annotate your public code repository with these parsing tokens. And within the Data Manager, import your project. Then once it has been installed. Simply hit parse then save your data set to your file system. All data sets are added into this project's data/sets/.

# Interested in collaborating?
*"Provably Unified Recursive Feedback"*

As a consequence of Stratimux's dialog system. Each application that is creating within this new class of provably halting algorithms becomes high quality training data for AI. As AI like this system of design is just a graph of functions. The only true difference is that AI is brute forced and trained, where a Stratimux project is created.

The design of the dialog system is purposely made to pair code implementations with logical explanations. The goal beyond this project is to prove such as high quality training data. If you would like to jump the gun and independently verify the quality of the data that has already been produced. [Please see this repository and proposal: **PURF**](https://github.com/Phuire-Research/PURF)

Cheers! Have fun! And thank you for your valuable time!
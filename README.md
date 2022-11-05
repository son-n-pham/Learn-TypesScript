# Learn-TypesScript

# 1. Install TypeScript (tsc)
I installed tsc by node.js. Just need to go to tsc website to get the command of installation. As I am using tsc global, I install it globally by the below command.
 
 ```node
 npm install -g typescript
 ```
 
 # 2. Run Typescript
 - Create file .ts
 - Write TS codes in ts file
 - Compile .ts file to .js
 ```notde
 tsc <file.ts>
 ```
 
# 3. Type Annotation Basics

## Syntax:
```typescript
let myVar: type = value;
```

When compiling by tsc, TS will inform if there are any errors, but it still compile to JS codes.

## Type inference
TS is smart to detect the type of variable when it first appears.

```typescript
// Type Inference
let tvShow = "Hello Google";
tvShow = "Goodbye Google";
tvShow = false; // It informs the error as the tvShow variable was first assign to string, thus has the string type
```

## The Any Type
```typescript
// The Any type: It allows the item to be anything
let anyThing: any = "hello";
anyThing = 12;
anyThing = true;
anyThing();
```

# 4. Function
<a href="./4_Functions">Link to TS files to learn</a>

# Logic Engine 

This library provides a logic engine for typescript projects which require 
clear types and processing for complicated logics. This library can also be used 
to learn logic and explore its applications and limits. 



## How to use

This library is written to provide support for logical languages for uses such as performing proofs or formalising natural language processing. 

Each formal language makes assumptions and has limitations, over time the goal is to support most of the main formal logical languages. 

In order to use the logic engine first install the package 

```
npm install logic-engine
```

After this, the types and methods of the library will be available for use.

Below are a list of supported languages with details of how to use them. 

# Languages

## First Order
First Order is the language of "classical propositional" logic. The main features of first-order are the following: 

### `WFF`
- Every sentence of First Order is a Well Formed Formula (`WFF`). 
- WFF's can be either `Atom` or `Complex` types. 

### `Atom` 
- An `Atom` is the smallest unit of truth-evaluable proposition in First Order :

        interface Atom {
          unaryOperator: UnaryOperator | undefined;
          proposition?: boolean | (() => boolean);
          value: () => boolean;
        } 
- The only valid unaryOperator in First Order is `'~'` for negation. 
- Every proposition is a truth-evaluable statement. As such, this can either be a boolean primitive or an expression which returns a boolean. 
- The value of an atom is a combination of the proposition with the application of the unary operator of negation (if it exists). 

### `Complex` 
- A `Complex` is similar to an Atom, however, it differs insofar as a Complex is a combination of WFF's, joined by a binaryOperator 

        interface Complex { 
          unaryOperator: UnaryOperator | undefined;
          left?: WFF;
          binaryOperator?: BinaryOperator;
          right?: WFF;
          value: () => boolean;
        }
- With a Complex, the left and right WFF's will evaluate to either true or false, these will be combined with a logical operator that will make the statement of the Complex evaluate to true or false (depending on the binary operator). The unaryOperator of negation can still be applied to the whole complex too

### Binary Operators

- Binary Operators combine multiple truth evaluable statement of WFF's into Complexes. For example the "then" in"If it is raining then the floor is when" or the "and" in "2+2=4 and today is Monday" 
- Binary operators combine a left and a right WFF. In the truth table models that follow I shall refer to the left WFF as 'P' and the right WFF as 'Q'.

#### AND 
- The Syntax for logical AND is '&' 
- Logical '&' has the following truth table 

    | P     | Q     | P & Q |
    |-------|-------|---------|
    | True  | True  | True    |
    | True  | False | False   |
    | False | True  | False   |
    | False | False | False   |

#### OR 
- The Syntax for logical inclusive OR is '|' 
- Logical '|' has the following truth table 

    | P     | Q     | P \| Q |
    |-------|-------|--------|
    | True  | True  | True   |
    | True  | False | True   |
    | False | True  | True   |
    | False | False | False  |

#### MATERIAL IMPLICATION 
- The Syntax for logical Material Implication is '->' 
- Logical '->' has the following truth table 

    | P     | Q     | P -> Q |
    |-------|-------|--------|
    | True  | True  | True   |
    | True  | False | False  |
    | False | True  | True   |
    | False | False | True   |

#### BICONDITIONAL 
- The Syntax for logical Biconditional is '<->' 
- Logical '<->' has the following truth table 

  | P     | Q     | P <-> Q |
  |-------|-------|---------|
  | True  | True  | True    |
  | True  | False | False   |
  | False | True  | False   |
  | False | False | True    |

### Syntax Engine 
- The `SyntaxEngine` is for processing strings, json and other types of information into the language of First Order and checking for correct syntax. 
> In Progress

### Evalutation Engine 
- The `EvaluationEngine` is for evaluating claims made within First Order. 
> In Progress

## Quantifiational 
> In Progress

## Modal Logics
> In Progress 

## Paraconsistent Logics 
> In Progress

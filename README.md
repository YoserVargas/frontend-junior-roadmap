# Frontend Junior Roadmap

A practical learning roadmap to become a Junior Frontend Developer and prepare for technical interviews.

## Main Goals

- Strengthen JavaScript fundamentals and problem-solving skills.
- Learn React and modern frontend development.
- Practice debugging and writing clean, maintainable code.
- Prepare for technical interviews and coding challenges.
- Build projects for a professional portfolio.
- Develop the ability to explain technical decisions independently.

## Learning Areas

### 1. JavaScript
- Fundamentals and ES6+
- Arrays, objects and functions
- Array methods
- Scope, closures and asynchronous JavaScript
- Problem-solving and algorithms

### 2. React
- Components and JSX
- Props and state
- Hooks
- Forms and events
- API integration
- Routing and project structure

### 3. Technical Interview Preparation
- JavaScript interview questions
- React interview questions
- Coding challenges
- Debugging exercises
- Mock technical interviews

### 4. Projects and Portfolio
- Practical frontend projects
- Git and GitHub workflow
- Code quality and documentation
- Portfolio development

## Progress Tracking

Each topic will include explanations, practical exercises, challenges and progress reviews.

## Final Goal

Become confident solving frontend problems independently, explaining technical concepts and successfully completing Junior Frontend Developer interviews.

## Progress Log

### JavaScript

#### Day 01 - Filtering and Transforming Data

**Challenge:** Filter active adult users and return their names.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select elements that meet specific conditions.
- `map()` to transform elements and extract names.
- Chaining array methods.
- Logical AND (`&&`).
- Strict equality (`===`).
- Greater than or equal (`>=`).
- Debugging syntax errors.

**Expected output:**
```js
["Carlos", "María", "Sofía"]
```

**Interview practice:**
- Explained the difference between `filter()` and `map()`.
- Identified why both methods are needed to filter users and extract their names.

**Status:** Completed

#### Day 02 - Product Filtering and Analysis

**Challenge:** Filter available technology products costing less than ₡20,000 and return their names.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select elements that meet multiple conditions.
- `map()` to extract product names.
- Chaining array methods.
- Logical AND (`&&`).
- Strict equality (`===`).
- Less than (`<`).
- Combining multiple conditions in a callback function.

**Expected output:**
```js
["Mouse", "Audifonos", "Webcam"]
```

**Interview practice:**
- Explained why `filter()` is needed before `map()`.
- Identified the difference between filtering elements and transforming them.
- Explained why `map()` alone does not filter elements based on conditions.

**Status:** Completed

#### Day 03 - Sales Analysis with Reduce

**Challenge:** Calculate the total amount of paid sales.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select paid sales.
- `reduce()` to accumulate values.
- Accumulator and current element.
- Initial value of the accumulator.
- Chaining array methods.
- Adding numeric object properties.

**Expected output:**
```js
476000
```

**Interview practice:**
- Explained the purpose of the accumulator.
- Identified how changing the initial value affects the result.
- Explained why removing `filter()` would include all sales.
- Distinguished between filtering elements and accumulating values.

**Status:** Completed

#### Day 04 - Employee Performance Analysis

**Challenge:** Identify employees who exceeded their sales target by at least ₡30,000 and return their names.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select employees.
- `map()` to extract employee names.
- Comparison operators (`>=`).
- Arithmetic operations (subtraction).
- Comparing object properties.
- Chaining array methods.
- Testing and debugging conditions.

**Main condition:**
```js
empleado.ventas - empleado.meta >= 30000
```

**Expected output:**
```js
["Carlos"]
```

**Interview practice:**
- Explained the difference between `>` and `>=`.
- Identified why the difference between sales and target must be calculated.
- Explained why employees exceeding their target by less than ₡30,000 do not qualify.

**Status:** Completed

#### Day 05 - Employee Filtering and Logical Operators

**Challenge:** Identify active employees from the Sales department earning at least ₡500,000.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select employees.
- `map()` to extract employee names.
- Multiple conditions using `&&`.
- Logical OR (`||`).
- Understanding the difference between AND and OR.
- Operator precedence (`&&` before `||`).
- Comparison operators (`===`, `>=`).

**Expected output:**
```js
["Carlos", "María", "Jorge"]
```

**Interview practice:**
- Explained why all conditions must be true when using `&&`.
- Explained why only one condition needs to be true when using `||`.
- Analyzed combinations of logical operators.
- Identified how operator precedence affects conditional expressions.

**Status:** Completed

#### Day 06 - Employee Salary Analysis

**Challenge:** Analyze the salaries of active employees and calculate total salaries, average salary and employee count.

**Concepts practiced:**
- Arrays of objects.
- `filter()` to select active employees.
- `reduce()` to calculate the total salary.
- `.length` to count active employees.
- Calculating averages using division.
- Variables and intermediate results.
- Returning objects from functions.
- Debugging variable references.

**Expected output:**
```js
{
  totalSalario: 3650000,
  salarioPromedio: 608333.33,
  empleadosActivos: 6
}
```

**Important debugging lesson:**
- Use `EmpleadosActivos.reduce()` instead of `empleados.reduce()` to avoid including inactive employees.

**Status:** Completed
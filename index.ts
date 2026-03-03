let someOuterScopeVariable : string;

async function generatorFunction() {
  return {
    inner: 'foo',
    outer: 'bar',
  };
}

async function myFunction() {
  let innerScope: string;
  // destructure assignment to existing variables
  ({inner: innerScope, outer: someOuterScopeVariable} = await generatorFunction());

  console.info(`${innerScope}, ${someOuterScopeVariable}`);
}

myFunction();

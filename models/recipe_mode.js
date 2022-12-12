var db3 = require('db3')
var db = db3.connect({host: 'example.org', user: 'bob', password: 'secret', database : 'test'})

/*getAllRecipes() query the database to return an array of recipes from the recipes table.

getRecipeDetail(recipe_id): query the database to return one object holding all the details of the recipe with the id given. Return data from the recipes, ingredients, and method table.

getComments(recipe_id): query the comments table to return a list of all the comments for the recipe with the given id.

addComment(recipe_id, comment): inserts in the comments table the comment given. Note the comment parameter is an object that holds the author and the text. npm i nunjucksAnd returns metadata about the inserted row.
*/
//code segment needed to recieve a user's input from terminal
const prompt = require('prompt-sync')();

let groceryList = [];

while(true)
{
    //prompt the user for which feature they wish to use
    console.log("\n1)Add grocery items\n2)Search grocery items\n3)Remove grocery items\n4)Print the entire list like this\n5)Exit\n")
    let feature = prompt("What would you like to do? ");


    //if statement to seperate the features
    //Add grocery items
    if(feature == 1)
    {
        console.log("\nEnter 'quit' to return to the main menue at any time.");
        groceryList = AddItems();
    }
    //Search grocery items
    else if(feature == 2)
    {
        //check to see if the list is empty
        if(groceryList == null ||groceryList == undefined)
        {
            console.log("Your list is empty. Please add items to your list before you search it. ");
            break;
        }

        //tell the user they can always quit back to the main menue
        console.log("\nEnter 'quit' to return to the main menue at any time.");

        //prompt the user for the item they wish to find
        let item = prompt("Enter the item you wish to find in the list: ").toLowerCase();

        //call the function to find an item in a list and
        //if the result is true/ the item was found
        if(SearchList(groceryList, item))
        {
            console.log("\nThe item was found\n");
        }
        else
        {
            console.log("\nThe item was not found\n");
        }

    }
    //Remove grocery items
    else if(feature == 3)
    {
        removeItem(groceryList);
    }
    //Print the entire list like this
    else if(feature == 4)
    {
        printList(groceryList);
    }
    //Exit
    else if(feature == 5)
    {
        break;
    }
    //if anything else was chosen
    else
    {
        console.log("That was not an option."); //infrom the user that it was not an option
    }
}






//a function to create an array with numItems of items
function AddItems() 
{
    let numItems = 0;
    let groceryList = [];
    let item = '';

    while (true) 
        {
        // Prompt the user for the number of items on their list
        numItems = Number(prompt("How many items are on your grocery list? "));

        // If the user wants to quit
        if (numItems === 'quit') 
        {
            console.log("Quiting back to the main menue...");
            return groceryList; // Return the list (even if empty)
        }
        // Check if input is not a number
        else if (isNaN(numItems)) 
        {
            console.log("Please enter a valid number.\nQuitting back to the main menue....");
            return groceryList; // Return the list (even if empty)
        } 
        else 
        {
            break; // Exit the loop if valid number is given
        }
    }

    // Create the list
    for (let i = 0; i < numItems; i++) 
    {
        item = prompt("Enter the name of an item: ").toLowerCase();

        // If the user wants to quit
        if (item === 'quit') 
        {
            console.log("Quiting back to the main menue...");
            return groceryList; // Return the list (even if empty)
        }

        // If the item is already in the list
        if (SearchList(groceryList, item)) 
        {
            console.log("That item is already present on your list.\nQuitting back to the main menue...");
            return groceryList; // Quit back to the main menu
        } 
        else 
        {
            // Add the item to the list
            groceryList.push(item);
        }
    }

    // Return the list
    return groceryList;
}







// A function to find an item in a list, case-insensitive.
// Returns true if it was found, false if it was not found
function SearchList(groceryList, item) 
{
    // Check if the item is undefined or null
    if (!item || item === 'quit') 
    {
        console.log("Quiting back to the main menue...");
        return; // Exit back to the main menu
    }

    // Convert the search item to lowercase
    let lowerCaseItem = item.toLowerCase();

    // Loop through the array to find the item
    for (let i = 0; i < groceryList.length; i++) 
    {
        // If an item is found
        if (groceryList[i].toLowerCase() === lowerCaseItem) 
        {
            return true;
        }
    }

    // If the loop completes, the item wasn't found
    return false;
}






// a function to remove an item or items from a list
function removeItem(groceryList) 
{
    while (true) 
    {
        // prompt the user for the item they want to be removed from the list
        let item = prompt("Enter the item you wish to remove: ").toLowerCase();

        // If the user types 'quit'
        if (item === 'quit') 
        {
            console.log("Quitting back to the main menu...");  //inform the user
            return; //quit back to the main menue
        }

        // Search the list to ensure the item is in the list
        // if it is not in the list
        if (!SearchList(groceryList, item)) 
        {
            console.log("The item you wish to remove is not in the list."); //inform the user
            return; //quit back to the main menue
        }
        else 
        {
            // Find the index of the item in the list
            const index = groceryList.findIndex(groceryItem => groceryItem.toLowerCase() === item);
            
            // Remove the item from the list using splice
            groceryList.splice(index, 1);

            // Confirm the removal to the user
            console.log(item + " has been removed from the grocery list.\n");
            break; // break the loop and return to the main menu
        }
    }
}


//a function to print out a list in order
function printList(groceryList)
{
    console.log('\n\n'); //seperate it from the prompt

    //loop through the list
    for(let i = 0; i < groceryList.length; i++)
    {
        console.log((i+1) + ". " + groceryList[i] + '\n'); //printing out the at position i
    }

}

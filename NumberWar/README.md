# Number War

A simpler version of War.  Players shuffle 10 cards valued 1-10 and play against other players drawing cards from the top of their deck.  The player who wins is the player who won the most against the players after going through their whole deck.

#### Step 1.
- Set up 2 players with 10 cards numbered 1-10 in random order

### Step 2.
- Choose the first card from each player

### Step 3.
- Show who wins

### Step 4.
- Do steps 1-3 using classes

### Step 5.
- Play each card in order against each other (total of 10 times as there are 10 cards) and show the number of wins for each player 

### Step 6. 
- Enhance class by using constructor method to take in cards for a player

Assignment
- Use the enhancedClass.js to continue work.
1. Add a third player and log each player's wins after playing all 10 cards against each other
2. Add a method that returns the player with the most wins
3. Add a new method to the `Manager Class` called `play` that will run the method `whoWins` 10 times in the same way we set up 
```
manager.whoWins(1);
manager.whoWins(2);
manager.whoWins(3);
...
```
4. Enhance the Manager Class to take 3 players in through its constructor
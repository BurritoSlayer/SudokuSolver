/* 
 * @Author ntacey
 * @Date 7/6/2016
 *
 * A project to help learn es6 concepts. Would like to eventually
 * convert into a node app.
 *
 * Main function solveSudoku takes in an 81 byte number
 * and returns a 81 byte number which is the solved puzzle
 *
 */

function solveSudoku(inputNumbers){ 
    
    // Class for creating objects that hold the current squares
    // index value as well as its numeric value (0 - 9)
    class NumHolder {
        constructor(indVal, numVal) {
            this.indVal = indVal;
            this.numVal = numVal;
        }
    }
    
    const parsedInputNumbers = []
    var solvingNumberIndex = [] // a two dimensional array ie a map that holds the position value (starting at 1 not 0) as well as the corresponding value
    const solvedInputNumbers = []
    var row1 = []
    var row2 = []
    var row3 = []
    var row4 = []
    var row5 = []
    var row6 = []
    var row7 = []
    var row8 = []
    var row9 = []
    var col1 = []
    var col2 = []
    var col3 = []
    var col4 = []
    var col5 = []
    var col6 = []
    var col7 = []
    var col8 = []
    var col9 = []
    var nonet1 = []
    var nonet2 = []
    var nonet3 = []
    var nonet4 = []
    var nonet5 = []
    var nonet6 = []
    var nonet7 = []
    var nonet8 = []
    var nonet9 = []
    var rowList = [row1, row2, row3, row4, row5, row6, row7, row8, row9]
    var colList = [col1, col2, col3, col4, col5, col6, col7, col8, col9]
    var nonetList = [nonet1, nonet2, nonet3, nonet4, nonet5, nonet6, nonet7, nonet8, nonet9]
    
    var tryQueue= [] //holds a list of functions

    //parses the input number list into an array
    parsedInputNumbers = (""+inputNumbers).split("");
    
    //input verification
    if (parsedInputNumbers.length < 81 ) {
        throw InvalidInputException(0)
    }
        
    if (parsedInputNumbers.length > 81 ){
        throw InvalidInputException(1)
    }
    
    for (let i = 0; i < parsedInputNumbers.length; i++) {
        let currNum = parsedInputNumbers[i];
        let divNum;
        
        let currNumHolder = new NumHolder(i + 1, currNum);
        
        //generate rows
        if (i < 9) {
            row1.push(currNumHolder);
            divNum = i;
        } else if (i >= 9 & i < 18) {
            row2.push(currNumHolder);
            divNum = (i - 9);
        } else if (i >= 18 & i < 27) {
            row3.push(currNumHolder);
            divNum = (i - 18);
        } else if (i >= 27 & i < 36) {
            row4.push(currNumHolder);
            divNum = (i - 27);
        } else if (i >= 36 & i < 45) {
            row5.push(currNumHolder);
            divNum = (i - 36);
        } else if (i >= 45 & i < 54) {
            row6.push(currNumHolder);
            divNum = (i - 45);
        } else if (i >= 54 & i < 63) {
            row7.push(currNumHolder);
            divNum = (i - 54);
        } else if (i >= 63 & i < 72) {
            row8.push(currNumHolder);
            divNum = (i - 63);
        } else if (i >= 72 & i < 81) {
            row9.push(currNumHolder);
            divNum = (i - 72);
        }
        
        //generate columns
        if (divNum === 0) {
            col1.push(currNumHolder);
        } else if (divNum === 1) {
            col2.push(currNumHolder);
        } else if (divNum === 2) {
            col3.push(currNumHolder);
        } else if (divNum === 3) {
            col4.push(currNumHolder);
        } else if (divNum === 4) {
            col5.push(currNumHolder);
        } else if (divNum === 5) {
            col6.push(currNumHolder);
        } else if (divNum === 6) {
            col7.push([i+1]currNum);
        } else if (divNum === 7) {
            col8.push([i+1]currNum);
        } else if (divNum === 8) {
            col9.push(currNumHolder);
        }
        
        //generate nonets
        if (i < 27) {
            if (divNum < 3) {
                nonet1.push(currNumHolder);
            } else if (divNum >= 3 & divNum < 6) {
                nonet2.push(currNumHolder);
            } else {
                nonet3.push(currNumHolder);
            }
        } else if (i >= 27 & i < 54) {
            if (divNum < 3) {
                nonet4.push(currNumHolder);
            } else if (divNum >= 3 & divNum < 6) {
                nonet5.push(currNumHolder);
            } else {
                nonet6.push(currNumHolder);
            }
        } else if (i >= 54 & i < 81) {
            if (divNum < 3) {
                nonet7.push(currNumHolder);
            } else if (divNum >= 3 & divNum < 6) {
                nonet8.push(currNumHolder);
            } else {
                nonet9.push(currNumHolder);
            }
        }
        
        //populate solvingNumbersIndex
        solvingNumberIndex.push(currNumHolder);
    }
    
    /* removed until necessary. this function removes 0s in row, col, or nonet array. so [0, 1, 9, 0, 7, 0] -> [1, 9, 7]
    function arrayWithOutZeros(array) {
        if (! array.includes(0) ) {
            return true;
        } else {
            for(let num in array) {
                //TODO code
            }
        }
    }
    */
    
    function compareCrossRowsAndCols(inputNumber){
        
    }
    
    //returns true if success, else returns false
    function crossHatching() {
        //loop through nonets..
        for (let nonet of nonetList) {
            //loop through values in current nonet..
            for (var i = 0; i < (nonet.length); i++) {
                //since this is a two dimensional array, skip every other value
                nonetList
            }
        }
    }
    
    //returns true if success, else returns false
    function pencilIn() {
    }
    
    //TODO add a way to update solvingNumberMap
    
    //recursively attempt to remove all zeros in input string, hence solving the puzzle
    //uses array.prototype.includes which is not supported in edge prior v14, IE (duh lol), node prior v6
    function solvePuzz() {
        if (! solvingNumbersMap.includes(0) ) { //TODO currently doesn't work with a two dimensional array
            return solvingNumbersMap; //TODO change to only returning a one dimensional array
        } else {          
            //actual code here
            for (let func of tryQueue) {
                func.call() ? break : continue;
            }
            
            solvePuzz();
        }
    }
                
    //note: all error handling will probably be moved to its own js file
    function InvalidInputException(type) {
        this.type = type;
        this.name = "InvalidInputException";
    
        switch(type) {
            case 0:
                this.message = "Too few numbers in input";
            case 1:
                this.message = "Too many numbers in input";
            case 2:
                this.message = "Invalid character in input string";
            default:
                this.message = "Unknown input exception";
        }
    
    }
        

}







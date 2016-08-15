import "MathsLibrary.sol";
contract SimpleContract {


  function SimpleContract(){

  }

  function addNumbers(uint a, uint b) constant returns (uint sum) {
        assembly {
            sum := add(a, b)
        }
    }


}

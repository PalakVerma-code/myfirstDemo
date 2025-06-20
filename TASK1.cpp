#include<iostream>
#include<ctime>
using namespace std;
 int main(){

   cout << "Welcome to the Number Guessing Game!\n" ;
   cout << "I have selected a number between 1 and 100. Can you guess it?\n" ;
   
   int Num;
 int att; //
    int userNum=0;//user input number
    // Generating different random numbers each time game will run 
   srand(time(0));
   Num=rand()%100;
   //Rang of the number between 1 t0 100;
    
    for(int att=0;att<7;att++){
      cout<<"enter the number :";
      cin>>userNum;
      if(Num==userNum){
         cout<<"\nCongratulation you guess the correct number "<<userNum;
         break; 
      }
      else if(Num>userNum){
         cout<<"\n your guessing number is too low ,attemp left "<<(7-(att+1));
         if((7-(att+1))>0){
            cout<<"\ntry again :";
         }
      }
      else if(Num<userNum){
         cout<<"\n your guessing number is too high ,attemp left "<<(7-(att+1));
         if((7-(att+1))>0){
            cout<<"\ntry again :";
         }
      }
    }
    if(att==0){
      cout<<"\nyou failed to guess the number is "<<Num;
    }
    
 }
#include<iostream>
using namespace std;
int main(){
	
	int m1;
	int m2;
	int m3;
	int m4;
	int m5;
	int m6;
	int total_maarks;
	int obtained_marks;
	float percentage;
	
	
	cout<<"Please enter you physics marks";
	cin>>m1;
	cout<<"Please enter you computer marks";
	cin>>m2;
	cout<<"Please enter you maths marks";
	cin>>m3;
	cout<<"Please enter you english marks";
	cin>>m4;
	cout<<"Please enter you urdu marks";
	cin>>m5;
	cout<<"Please enter you Islamiat marks";
	cin>>m6;	
	cout<<"Please enter you total marks";
	cin>>total_maarks;
	obtained_marks = m1+m2+m3+m4+m5+m6;
	percentage = (obtained_marks/total_maarks)*100;
	if(percentage>=80){
		cout<<"you got A+ ";
		cout<<"your Percentage is :"<<percentage;
		cout<<"your obtained marks are :" <<obtained_marks;
	}
	else if(percentage>=70 &&percentage<80){
		cout<<"you got A grade";
		cout<<"your Percentage is :"<<percentage;
		cout<<"your obtained marks are :" <<obtained_marks;
	}
	else if(percentage>=60 &&percentage<70){
		cout<<"you got B grade";
		cout<<"your Percentage is :"<<percentage;
		cout<<"your obtained marks are :" <<obtained_marks;
	}
	else if(percentage>=50 &&percentage<60){
		cout<<"you got C grade";
		cout<<"your Percentage is :"<<percentage;
		cout<<"your obtained marks are :" <<obtained_marks;
	}
	else{
		cout<<"Failed";
		cout<<"your Percentage is :"<<percentage;
		cout<<"your obtained marks are :" <<obtained_marks;
	};
	
};

#include <iostream>

using namespace std;

int main() {
    int a, h, w, days;
    bool isIntense;
    cout << "Age: ";
    cin >> a;
    cout << "Weight: ";
    cin >> w;
    cout << "Height: ";
    cin >> h;
    cout << "Intense exercise or not?";
    cin >> isIntense;
    cout << "How many days do you work out per week?";
    cin >> days;
    double age = a;
    double height = h/2.54;
    double weight = w*2.205;
    double add;
    if (!isIntense) add = 227*days;
    else add = 446*days;
    bool isMale;
    cout << "Are you male?";
    cin >> isMale;
    double eq1, eq2;
    if (isMale) {
        eq1 = ((double)10*weight+6.25*height-5*age+5)*7+add;
        eq2 = ((double)66+6.23*weight+12.7*height-6.8*age)*7+add;
    }
    else {
        eq1 = ((double)10*weight+6.25*height-5*age-161)*7+add;
        eq2 = ((double)655+(6.23*weight)+(4.7*height)-(4.7*age))*7+add;
    }
    cout << endl;
    cout << add/7<< endl;
    cout << "Equation 1: "<<eq1<< endl;
    cout << "Equation 2: "<< eq2<< endl;
    cout << "Average: "<<(eq1+eq2)/2<< endl;
    return 0;
}
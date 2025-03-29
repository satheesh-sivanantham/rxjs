# rxjs
# of operator 
    - Create an observable from string or object or array 
    - Example - viewers:Observables<string[]>= of(['car', 'bike'])
# Form Operator
    - From operator will create an obervable from array, array like object, promise, an itratable object 
    - It wont create an observable from string 
# From event operator 
    - Create an observable from the event 
    - For example if we have an input that have some events like onclick, mouse hover. So when we click on the input its emit the value
    that changed into observables by this event.
    - Use case: 
        *User shoudn't allowed to click 3 or more time immediatly 
# Interval Operator 
    - It will do some operation after certain time of interval 
    - Use case: If you need a sequencial number and you want thant number to be generated after certains interval of time 
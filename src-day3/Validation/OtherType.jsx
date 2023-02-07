import React from "react";
import PropTypes from 'prop-types';

class OtherProps extends React.Component {
    render(){
        return(
            <div>
                <h1>ReactJS Props Validation Example</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Node</td>
                            <td>{this.props.nodeProp}</td>
                            <td>{this.props.nodeProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>element</td>
                            <td>{this.props.elementProp.name}</td>
                            <td>{this.props.elementProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Enum</td>
                            <td>{this.props.enumProp}</td>
                            <td>{this.props.enumProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Union</td>
                            <td>{this.props.unionProp.name}</td>
                            <td>{this.props.unionProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>singleArray</td>
                            <td>{this.props.peopleArrayProp[0].name}</td>
                            <td>{this.props.peopleArrayProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>multipleArray</td>
                            <td>{this.props.multipleArrayProp[0].name}</td>
                            <td>{this.props.multipleArrayProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>booleanObject</td>
                            <td>{this.props.booleanObjectProp.isOdd}</td>
                            <td>{this.props.booleanObjectProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>multipleObject</td>
                            <td>{this.props.multipleObjectProp.age}</td>
                            <td>{this.props.multipleObjectProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>profileProp</td>
                            <td>{this.props.profileProp.birthdate.toDateString()}</td>
                            <td>{this.props.profileProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>subjectScoreProp</td>
                            <td>{this.props.subjectScoreProp.subject}</td>
                            <td>{this.props.subjectScoreProp ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{this.props.email}</td>
                            <td>{this.props.email ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td><EmailCard email='ddcom'/></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

class Person{
    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }

    age(){
        let date = new Date();
        return date.getFullYear()-this.year;
    }
}

const isEmail = (props, propName, componentName) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regex.test(props[propName]))
        return new Error(
            `Invalid prop ${propName} passed to ${componentName}. Expected a valid email.`
        )
};

const EmailCard = ({email}) => {
    return <a href={`mailto:`+email}>{email}</a>
};

EmailCard.protoType = {
    email: isEmail
}

OtherProps.protoType = {
    nodeProp: PropTypes.node,
    elementProp: PropTypes.element,
    enumProp: PropTypes.oneOf([true, false, 0, 'Unknown']),

    unionProp: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Person)
    ]),
    peopleArrayProp: PropTypes.arrayOf(
        PropTypes.instanceOf(Person)
    ),
    multipleArrayProp: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ),
    booleanObjectProp: PropTypes.objectOf(
        PropTypes.bool
    ),
    multipleObjectProp: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.number,
            PropTypes.string,
            PropTypes.instanceOf(Person)
        ])
    ),
    profileProp: PropTypes.shape({
        id: PropTypes.number,
        fullname: PropTypes.string,
        gender: PropTypes.oneOf(['M','F']),
        birthdate: PropTypes.instanceOf(Date),
        isAuthor: PropTypes.bool
    }),
    subjectScoreProp: PropTypes.exact({
        subject: PropTypes.oneOf(['Maths','Phys','Chem']),
        score: PropTypes.number
    }),
    email: isEmail
}

OtherProps.defaultProps = {
    nodeProp: "<h1>Vishesh</h1>",
    elementProp: React.createElement('h1',{class:"head-tag"},"Vishesh"),
    enumProp: 5,
    unionProp: new Person("Vishesh", "ECE"),
    peopleArrayProp: [new Person("Vishesh","ECE"), new Person("Sarani","ECE")],
    multipleArrayProp: [5,8,9],
    booleanObjectProp: {isOdd: true},
    multipleObjectProp: {name: 'Vishesh', age: 22},
    profileProp: {
        id: 126,
        fullname: 'Vishesh Agarwal',
        gender: 'M',
        birthdate: new Date(2000,5,14),
        isAuthor: true,
    },
    subjectScoreProp: {
        subject: 'Math',
        score: 95
    },
    email: 'vishsar2906@gmail.com'
}

export default OtherProps;


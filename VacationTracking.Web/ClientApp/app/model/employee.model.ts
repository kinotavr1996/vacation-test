export class EmployeeModel {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public password: string,
        public surname: string,
        public roleId: number,
        public StartDate: Date,
        public EndDate: Date
    ) { }

    static fromJSON(object: any): EmployeeModel {
        return new EmployeeModel(
            object["id"],
            object["email"],
            object["name"],
            object["passwordHash"],
            object["surname"],
            object["roleId"],
            object["startDate"],
            object["endDate"]
        );
    }
    static fromJSONArray(array: Array<Object>): EmployeeModel[] {
        return array.map(obj => EmployeeModel.fromJSON(obj));
    }
}

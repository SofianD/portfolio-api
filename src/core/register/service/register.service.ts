import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Admin } from 'src/shared/models/admin.interface';
import { Model } from "mongoose";

@Injectable()
export class RegisterService {

    constructor(
        @InjectModel('Admin') private readonly adminModel: Model<Admin>
    ) {}

    async createAdmin(
        userData: any
    ) {
        const newAdmin = await new this.adminModel(userData);
        const result = await newAdmin.save();
        const {__v , password ,...createdAdmin} = result._doc;  // const createdAdmin = result._doc whitout "__v" and "password" parameters
        return createdAdmin;
    }
}

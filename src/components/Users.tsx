import React, { useEffect, useState, useCallback} from "react";
import { Table } from "antd";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface UserSchema {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    [key: string]: any; // Add index signature
};

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id"
    },
    {
        title: "Username",
        dataIndex: "username",
        key: "username"
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email"
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
    },
    {
        title: "Website",
        dataIndex: "website",
        key: "website"
    }
];


const Users = () => {
    const [error, setError] = useState();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const extractData = (user: User, column: any) => {
        const columnKey: string = column.dataIndex;
        return user[columnKey];
    };

    // extract all users data using fields defined in the columns array
    const extractUsers = useCallback((data: UserSchema[]): User[] => {  
        const userData: User[] = data.map((item: UserSchema) => {
            return columns.reduce((acc, column) => {
                return {
                    ...acc,
                    [column.key]: extractData(item, column)
                };
            }, {} as User);
        });
        return userData;
    }, []);

    useEffect(()=> {
        const fetchUsers = async () => {
            setIsLoading(true);
            try{
                const response = await fetch(`${BASE_URL}/users`);
                const data = (await response.json()) as UserSchema[];
                const users = extractUsers(data);
                setUsers(users);
            } catch(error: any){
                setError(error);
            } finally{
                setIsLoading(false);
            }
            
        };

        fetchUsers();
    }, [extractUsers]);

    return (
        <div className="container mx-auto px-5 w-full">
            {isLoading && 
                <div>Loading data...</div>
            }
            {!isLoading && 
                <div className="w-full">
                    <h1 className="text-2xl font-bold my-5">Users</h1>
                    <Table 
                        dataSource={users} 
                        columns={columns} 
                        pagination={{position: ["bottomCenter"]}}
                        rowKey="id"
                    />
                </div>
            }
            { error && <>Error: {error}</>}
        </div>
    );
};

export default Users;
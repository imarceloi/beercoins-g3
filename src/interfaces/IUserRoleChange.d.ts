interface IUserRoleChangeDTO {
    roleType: 'ROLE_MODERATOR' | 'ROLE_USER',
    userId: number
}

interface IUserRole {
    id: number,
    name: 'ROLE_MODERATOR' | 'ROLE_USER'
}

interface IRoleAccount {
    cnpj: string,
    email: string,
    id: number,
    nome: string,
    phonenumber: string,
    roles: IUserRole[],
    username: string
}
import bcrypt from "bcrypt";

export const createHash = (password: string | Buffer) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValid = (user: { password: string; }, password: string | Buffer) => bcrypt.compareSync(password, user.password)
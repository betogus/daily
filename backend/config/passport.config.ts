import passport from "passport";
import local from "passport-local";
import { users } from "../model/Users";
import { createHash, isValid } from "../utils/hashPassword";


const LocalStrategy = local.Strategy;

export const initializePassport = () => {
    passport.use(
        "register",
        new LocalStrategy(
            { passReqToCallback: true },
            async (req, username: string, password: string, done) => {
                try {
                    let user = await users.findOne({ username });
                    if (user) return done(null, false); // Usuario ya existe

                    const newUser = {
                        username,
                        password: createHash(password),
                        email: req.body.email,
                        name: req.body.name
                    };

                    let result = await users.create(newUser);
                    return done(null, result);
                } catch (err) {
                    done(err);
                }
            }
        )
    );

    passport.serializeUser((user: any, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id: string, done) => {
        users.findById(id, (err: any, user: boolean | Express.User | null | undefined) => {
            done(err, user);
        });
    });

    passport.use(
        "login",
        new LocalStrategy(
            { usernameField: "email" }, 
            async (email: string, password: string, done) => {
                try {
                    let user = await users.findOne({ email });
                    if (!user) return done(null, false); 
                    if (!isValid(user, password)) return done(null, false); 
                    return done(null, user); 
                } catch (err) {
                    return done(err);
                }
            }
        )
    );
    
};

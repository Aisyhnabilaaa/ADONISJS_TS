// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";

export default class AuthController {
    public async register({ auth, request, response}: HttpContextContract) {
        const validateData = await request.validate({
            
        })
    }
}

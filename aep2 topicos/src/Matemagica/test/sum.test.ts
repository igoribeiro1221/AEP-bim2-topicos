import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'

describe('Matemagica sum', () => {
    test('Deve retornar o valor correto da soma', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(10)
        matemagica.setValor2(5)
        
        expect(matemagica.getSum()).toBe(15)
    })

    test('Deve retornar um erro ao tentar realizar uma soma passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(1)
        // @ts-ignore
        matemagica.setValor2('valor')
        expect(matemagica.getSum()).toBe(ErrorMessages.NOT_NUMBER)
    })
})

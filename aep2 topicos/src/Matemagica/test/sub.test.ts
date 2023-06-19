import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'

describe('Matemagica sub', () => {
    test('Deve retornar o valor correto da subtracao', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(9)
        matemagica.setValor2(4)
        
        expect(matemagica.getSub()).toBe(5)
    })

    test('Deve retornar um erro ao tentar realizar uma subtracao passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(5)
        // @ts-ignore
        matemagica.setValor2('oi')
        expect(matemagica.getSub()).toBe(ErrorMessages.NOT_NUMBER)
    })
})

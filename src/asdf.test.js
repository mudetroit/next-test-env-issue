describe('env variable test', () => {
    it('should match environment', () => {
        expect(process.env.NEXT_PUBLIC_TEST).toBe('test')
    })
})
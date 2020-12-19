describe('sample test 1010', () =>{
//test() same as it()
it('works as expected', () => {
    expect(1).toEqual(1);
});
it('handle ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100)
});
it('makes a list of dog names', ()=>{
    const dogs= ['nickers', 'huog'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('nickers');
});
xit('skip this test', ()=>{
    const dogs= ['nickers', 'huog'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('nickers');
});
fit('focus on this test', ()=>{
    const dogs= ['nickers', 'huog'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('nickers');
})
});


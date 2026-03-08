// matchmaker.test.js
const { evaluateMatchStability } = require('./matchmaker');

test('EXCLUSIVE: Should fail match stability if skill is perfect but attitude is Volatile', () => {
    const player1 = { name: "Pro_Jacob", skill: 50, attitude: 'Positive' };
    const toxicPlayer = { name: "Toxic_User", skill: 50, attitude: 'Volatile' };

    const report = evaluateMatchStability(player1, toxicPlayer);

    // This is the specific "human component" logic the project goal requires
    expect(report.isStable).toBe(false);
    expect(report.reason).toContain('Attitude Conflict');
});

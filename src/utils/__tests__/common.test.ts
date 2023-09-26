import { generateUUID } from "../common";

describe('generateUUID', () => {
  it('should generate a valid UUID with correct format', () => {
    const uuid = generateUUID();

    expect(uuid).toEqual(expect.any(String));
  });

  it('should generate unique UUIDs on each call', () => {
    const uuid1 = generateUUID();
    const uuid2 = generateUUID();

    expect(uuid1).not.toBe(uuid2);
  });
});

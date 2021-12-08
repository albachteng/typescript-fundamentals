type JsonObject = {
    [k: string]: JsonValue
}
type JsonArray = JsonValue[];
type JsonValue = string | number | true | false | null | JsonArray | JsonObject;

const json: JsonValue = { hello: "world" };
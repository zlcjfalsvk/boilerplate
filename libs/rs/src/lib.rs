use chrono::Utc;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::JsValue;

#[wasm_bindgen(getter_with_clone)]
#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: i32,
    pub email: String,
    pub name: String,
    pub created_at: String,
}

#[wasm_bindgen]
impl User {
    #[wasm_bindgen]
    pub fn generate(id: i32, email: &str, name: &str) -> User {
        User {
            id: id,
            email: email.to_string(),
            name: name.to_string(),
            created_at: Utc::now().to_string(),
        }
    }

    #[wasm_bindgen(constructor)]
    pub fn new(id: i32, email: &str, name: &str) -> User {
        User {
            id: id,
            email: email.to_string(),
            name: name.to_string(),
            created_at: Utc::now().to_string(),
        }
    }

    #[wasm_bindgen]
    pub fn to_json(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self).unwrap()
    }
}

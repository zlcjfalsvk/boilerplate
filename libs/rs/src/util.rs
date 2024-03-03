use uuid::Uuid;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn generate_uuid() -> String {
  Uuid::new_v4().to_string()
}

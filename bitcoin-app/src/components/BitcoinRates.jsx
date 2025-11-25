import { useState } from "react";
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useBitcoinRate } from "../hooks/useBitcoinRate";
import { useEmojiContext } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const rate = useBitcoinRate(currency);
  const { emoji } = useEmojiContext();

  return (
    <Card sx={{ maxWidth: 500, margin: "30px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Bitcoin Exchange Rate {emoji}
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Currency</InputLabel>
          <Select
            value={currency}
            label="Select Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map((curr) => (
              <MenuItem key={curr} value={curr}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography variant="h6">
          Rate: {rate ? rate : "Loading..."}
        </Typography>
      </CardContent>
    </Card>
  );
}
